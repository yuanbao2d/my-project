import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-componetname',
  templateUrl: './componetname.page.html',
  styleUrls: ['./componetname.page.scss'],
})
export class ComponetnamePage implements OnInit,OnDestroy {
  currentImage: any;
  constructor(private camera: Camera) { 
    console.log('constr')
  }
  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });

  }
  ngOnInit() {
    console.log(11)
  }
  ngOnDestroy(){
    console.log(22)
  }
}
