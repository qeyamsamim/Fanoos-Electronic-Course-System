import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { finalize, map, switchMap, take, tap } from 'rxjs/operators';
import { OurClass } from '../models/class.model';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private _class = new BehaviorSubject<OurClass[]>([]);
  private itemsAPI = 'https://fanoos-ecourse-system-default-rtdb.firebaseio.com/classes.json';

  constructor(
    private http: HttpClient
  ) { }

  get classes() {
    return this._class.asObservable();
  }

  getClassId(classId: string) {
    return this.http
    .get<OurClass>(
      `https://fanoos-ecourse-system-default-rtdb.firebaseio.com/classes/${classId}.json`
    )
    .pipe(
      map(resData => {
        return new OurClass(
          resData.className,
          resData.instructor,
          resData.fee,
          resData.topics,
          resData.startDate,
          resData.schedule,
          resData.startTime,
          resData.endTime,
          resData.description,
          resData.imageURL,
          resData.dateAdded,
          resData.id
        );
      })
    );
  }

  fetchClass() {
    return this.http
      .get<{ [key: string]: OurClass}>(this.itemsAPI)
      .pipe(
        map(resData => {
          const myClasses: OurClass[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              myClasses.push({...resData[key], id: key });
            }
          }
          return myClasses.sort((a: OurClass, b: OurClass) => {
            return <any>new Date(a.startDate) - <any>new Date(b.startDate)
          });
        }),
        tap(classes => {
          this._class.next(classes);
        })
      );
  }

  addClasses(newClass: OurClass) {
    let generatedId: string;
    return this.http
      .post<{ name: string }> (
        this.itemsAPI, { ...newClass, id: null}
      )
      .pipe(
        switchMap(resData => {
          generatedId = resData.name;
          return this.classes;
        }),
        take(1),
        tap(ourClass => {
          newClass.id = generatedId;
          this._class.next(ourClass.concat(newClass));
        })
      );
  }

  // deleteItems(itemId: string) {
  //   return this.http
  //     .delete(`https://del-collesso-default-rtdb.firebaseio.com/items/${itemId}.json`)
  //     .pipe(
  //       switchMap(() => {
  //         return this.items;
  //       }),
  //       take(1),
  //       tap(myItems => {
  //         this._items.next(myItems.filter(iD => iD.id !== itemId));
  //        })
  //     );
  // }

  // updateItems(
  //   name: string,
  //   price: string,
  //   discount: number,
  //   category: string,
  //   description: string,
  //   datePosted: Date,
  //   imgURL: string,
  //   itemId: string
  // ) {
  //   let updatedItem: Item[];
  //   return this.items.pipe(
  //     take(1),
  //     switchMap(myItems => {
  //       if (!myItems || myItems.length <= 0) {
  //         return this.fetchItems();
  //       } else {
  //         return of(myItems);
  //       }
  //     }),
  //     switchMap(myItems => {
  //       const updatedItemIndex = myItems.findIndex(i => i.id === itemId);
  //       updatedItem = [...myItems];
  //       const oldItem = updatedItem[updatedItemIndex];
  //       updatedItem[updatedItemIndex] = new Item(
  //         name,
  //         price,
  //         discount,
  //         category,
  //         description,
  //         datePosted,
  //         imgURL,
  //         oldItem.id
  //       );
  //       return this.http
  //         .put(
  //           `https://del-collesso-default-rtdb.firebaseio.com/items/${itemId}.json`,
  //         { ...updatedItem[updatedItemIndex], id: null }
  //       );
  //     }),
  //     tap(() => {
  //       this._items.next(updatedItem);
  //     })
  //   );
  // }
}
