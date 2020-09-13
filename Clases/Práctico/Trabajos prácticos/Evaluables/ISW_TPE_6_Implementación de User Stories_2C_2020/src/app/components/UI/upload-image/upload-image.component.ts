import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {
  public DireccionForm:FormGroup;
  fileToUpload: File = null;

  url;
  @Output() fileSeleccionado: EventEmitter< File >;

  constructor() {
    this.fileSeleccionado = new EventEmitter();
   }

  imageUploadEvent(evt: any) {
    if (!evt.target) { return; }
    if (!evt.target.files) { return; }
    if (evt.target.files.length !== 1) { return; }
    
    const file = evt.target.files[0];
    
    if(!this.checkMaxSize(file)) { return; }

    console.log(file);
    
    this.fileSeleccionado.emit(file);
   if (this.fileValidation()){
     this.showImage(file);
   }

    
  }
  ngOnInit():void {
    this.initForm();
 
   }
 
   initForm(){
     this.DireccionForm= new FormGroup({
 
      imagenPed:new FormControl(''),
     })
   }
  checkMaxSize( file ) {
    const sizeInMegas = file.size / 1024 / 1024;
    return sizeInMegas <= 5;
  }

  showImage( file ) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (event) => {
      this.url = event.target.result;
    }
  }

  deleteImage() {
    this.url = '';
    this.fileSeleccionado.emit(null);
  }


  fileValidation() {
    if (this.DireccionForm.controls.imagenPed.dirty && this.DireccionForm.controls.imagenPed.value != '') {
      let fileInput = this.DireccionForm.controls.imagenPed.value;
      let allowedExtensions = /(\.jpg|\.png)$/i;
      if (!allowedExtensions.exec(fileInput)) {
        return false;
      }
      else {
        return true;
      }
    }
    else {
      return true;
    }
  }
}
