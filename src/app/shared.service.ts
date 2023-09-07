import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor( private http:HttpClient) {
    
   }
   url='http://127.0.0.1:4000/auth/';
   url2='http://127.0.0.1:4000/patient/';
   url3='http://127.0.0.1:4000/doctor/';
   login(user : any){
    return this.http.post(this.url+'sign_in',user)
 }
  signup(newuser : any){
  return this.http.post(this.url+'sign_up',newuser)
}
addpatient(patient : any){
  return this.http.post(this.url2+'/addpatient',patient)
}
getpatient(){
  return this.http.get(this.url2+'/getpatient')
}
deletepatient(id:any){
  return this.http.delete(this.url2+'supprimer/'+id);
}
updatepatient(id:any,patient:any){
  return this.http.put(this.url2+'update/'+id,patient);
}
getpatientbyid(id:any){
  return this.http.get(this.url2+'getbyid/'+id)
}
create(doctor:any){
  return this.http.post(this.url3+'/create',doctor);
}
getdoctorbyid(id:any){
  return this.http.get(this.url3+'getdoctorbyid/'+id)
}
deletedoctor(id:any){
  return this.http.delete(this.url3+'delete/'+id);
}
getdoctor(){
  return this.http.get(this.url3+'/getdoctor')
}
updatedoctor(id:any,doctor:any){
  return this.http.put(this.url3+'updoctor/'+id,doctor);
}
}
