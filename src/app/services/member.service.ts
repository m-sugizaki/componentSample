import { Injectable }    from '@angular/core';
//@angular/httpが非推奨になった
//import { Headers, Http, Jsonp, RequestOptionsArgs, RequestOptions, URLSearchParams} from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
////rxjs6.0からこのような書き方になる
////import {Observable} from  "rxjs/Observable";
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
////import "rxjs/add/operator/map";

import { Member } from '../member';
import { NullViewportScroller } from '@angular/common/src/viewport_scroller';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  //リクエストヘッダを定義 @angular/common/http
  private headers: any = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
//  private headers: any = new Headers({'Content-Type': 'application/json', 'charset': 'utf-8', 'Accept': 'application/json'});
  //RestAPIのURL
//  private membersUrl = 'http://54.199.142.134:8080/users';
// private membersUrl = 'http://localhost:8081/users';
private membersUrl = 'http://13.115.40.246:8081/users';

//    members: Member[];
//  members = [
//    new Member(1, '杉崎', 'pass1'),
//    new Member(2, '鈴木', 'pass2'),
//    new Member(3, '山田', 'pass3'),
//  ];

//  constructor() { }
  constructor(private http: HttpClient) { }

////////////////////////////////////////////////////
// Angular 6 HttpClient: Consume RESTful API Example
// https://www.djamware.com/post/5b87894280aca74669894414/angular-6-httpclient-consume-restful-api-example  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getMembers(): Observable<any> {
    console.log(this.headers);
    return this.http.get(this.membersUrl).pipe(
      map(this.extractData));
  }
  
  getMember(id: number): Observable<any> {
    console.log(this.headers);

    return this.http.get(this.membersUrl + '/' + id).pipe(
      map(this.extractData));
  }
  
  addMember (member: Member): Observable<any> {
    console.log(member);
    console.log(this.headers);

    return this.http.post<any>(this.membersUrl, JSON.stringify(member), this.headers).pipe(
      tap((product) => console.log(`added member w/ id=${member.id}`)),
      catchError(this.handleError<any>('addMember'))
    );
  }
  
  updateMember (id: number, member: Member): Observable<any> {
//letでheadersを作らないと、content-type=text/plainになってしまう
//addはできるのに… 
    let headers2 = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
//    console.log(headers2);
    return this.http.put(this.membersUrl + '/' + id, JSON.stringify(member), {headers:headers2}).pipe(
      tap(_ => console.log(`updated member id=${id}`)),
      catchError(this.handleError<any>('updateMember'))
    );
  }
  
  deleteMember (id: number): Observable<any> {
    return this.http.delete<any>(this.membersUrl + '/' + id, this.headers).pipe(
      tap(_ => console.log(`deleted member id=${id}`)),
      catchError(this.handleError<any>('deleteMember'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
// End of Tutorial code
////////////////////////////////////////////////////

  //メンバー一覧取得
  public list(): Observable<Member[]> {
    return this.http.get(this.membersUrl, this.headers).pipe(
      map((response: any) =>
        Object.keys(response).map((key: string) => {
          const mbr = response[key];
          return new Member(mbr.id, mbr.name, mbr.pass);
        })
      )
    );
  }

  getMember2(id: number): Observable<Member> {
    return this.http.get<Member>(`${this.membersUrl}/${id}`)
//      .pipe(
//        catchError(this.handleError<Member>(`getUser id=${id}`))
//      );
  }


//  public getMember(id: number): Observable<Member> {
//    return this.http.get(this.membersUrl+'/'+ id, this.headers).pipe(
//      map((response: any) =>
//        Object.keys(response).map((key: string) => {
//          const mbr = response[key];
//          return new Member(mbr.id, mbr.name, mbr.pass);
//        })
//      )
//    );
//  }


  public create(member: Member): Observable<void> {
    return this.http.post(this.membersUrl, member, this.headers).pipe(
  //    return this.http.post(`${this.BASE_URL}/users/${this.UID}/products.json`, product, { params: { auth: this.TOKEN } }).pipe(
      map((response: any) =>  member.id = response.name),
    );
  }



  /**
   * REST-API 実行時のエラーハンドラ
   * (toPromise.then((res) =>{}) を利用する場合のコード)
   *
   * @private
   * @param {any} err エラー情報
   * @memberof HttpClientService
   */
  private errorHandler(err) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }

  //list(): Observable<Member[]> {
  //  return of(this.members);
  //}
  //get(id: number): Observable<Member> {
  //  return of(this.members[id -1]);
  //}

  //update(member: Member): void {
  //  const index = this.members.findIndex((mbr: Member) => mbr.id === member.id);
  //  this.members[index] = member;
  //}
}