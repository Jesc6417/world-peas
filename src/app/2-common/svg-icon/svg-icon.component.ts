import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core'

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [],
  template: ``,
  styles: `
  :host {
    height: 100%;
    width: 100%;
    background-color: black;
    -webkit-mask-size: contain;
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
    display: block;
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconComponent {
  @HostBinding('style.-webkit-mask-image')
  private _path!: string

  @HostBinding('style.width')
  private _width!: string

  @HostBinding('style.height')
  private _height!: string

  @HostBinding('style.background-color')
  private _backgroundColor!: string

  @Input()
  public set path(filePath: string) {
    this._path = `url("${filePath}")`
  }

  @Input()
  public set width(width: string) {
    this._width = width
  }

  @Input()
  public set height(height: string) {
    this._height = height
  }

  @Input()
  public set backgroundColor(color: string) {
    this._backgroundColor = color
  }
}
