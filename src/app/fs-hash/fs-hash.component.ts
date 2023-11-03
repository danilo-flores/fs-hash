import { Component, NgModule } from '@angular/core';
import { FS } from './fs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fs-hash',
  templateUrl: './fs-hash.component.html',
  styleUrls: ['./fs-hash.component.css']
})

export class FsHashComponent {
  content: string | undefined;
  FSCreate: FS = new FS('/my-test');

  fs = new FS('/topdir');

  saveContent(content: string): string {
    console.log(this.FSCreate.store(content));
    return this.FSCreate.store(content);
  }

  getContent(hash: string): string | undefined {    
    const retrievedContent: string | undefined = this.FSCreate.get(hash);
    this.content = retrievedContent;
    return retrievedContent;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
  }
}

@NgModule({
  declarations: [FsHashComponent],
  imports: [CommonModule]
})

export class FsHashModule {}