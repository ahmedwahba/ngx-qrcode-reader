# ngx-qrcode-reader

An Angular Component library for Reading QR Codes.It depends on ```qrcode-reader``` package to fetch and extract QR value.

You can pass QRCode as URL to image or DATA URL.

**Note:**
This library has been tested on Angular 11.x.x

## Installation

To use ngx-qrcode-reader in your project, install it via npm:

```bash

npm install qrcode-reader ngx-qrcode-reader --save

```

## Usage

Import the NgxQrcodeReaderModule from ngx-qrcode-reader  into your app module  :

```typescript

import { NgxQrcodeReaderModule } from 'ngx-qrcode-reader';

```


Once the library is imported, you can use the ngx-qrcode-reader component in your Angular application:

```xml

 <ngx-qrcode-reader 
    (onfetchQRContent)="onFetchQRContent($event)"
    [qrClass]="qrcode-reader-class"
    [qrFile]="fileValue" 
    [showQr]="showQRCode">
 </ngx-qrcode-reader>


```

use HTML input to get the file

```HTML

<input type="file" #file name="file" (change)="preview(file.files)" />
```

then the following snippet for typescript code:

```typescript

preview(files) {
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      alert("Only images are supported.");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.fileValue = reader.result;
      console.log('This file will be decoded', reader.result);
      /* Now you can show QR file  */
      this.showQRCode = true;
    }
  }

  onFetchQRContent(result) {
    if(result.content) {
      console.log('QR code content result ', result.content);
      /* add your logic and use the result here */
    } else {
      /* Error while fetching QR content from input image */
      console.log('ERROR: ', result.error)
    }
    
  }

```

## License

MIT © [Ahmed Wahba](mailto:wahba.it@gmail.com)
