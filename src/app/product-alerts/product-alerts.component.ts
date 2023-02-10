import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  // selector 用于标识组件，按照惯例，APP组件选择器一般以前缀app-开头，后面跟组件名称
  selector: 'app-product-alerts',
  // 模板和样式文件名
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
// 该类会处理组件的功能
export class ProductAlertsComponent {
  // 使用@Input()装饰器定义一个名为product的属性，指出此属性值要从本组件的父组件ProductListCompont中传入
  @Input() product!: Product;
  // 使用@Output()装饰器和EventEmitter()的实例定义一个名为notify的属性。让ProductAlertsComponent在notify属性值发生改变时引发一个事件
  @Output() notify = new EventEmitter();
}
