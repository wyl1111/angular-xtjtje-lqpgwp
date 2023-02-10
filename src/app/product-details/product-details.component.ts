import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  // 定义product属性
  product: Product | undefined;
  // 把ActivatedRoute注入到constructor()中
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  // 在ngOnInit()方法中,从路由参数中提取productId,并在products中找到对应的产品
  /**
   * 路由参数与在app.moudle.ts中定义的路径变量相对应
   * 要访问路由参数,使用route.snapshot,它是一个ActivatedRouteSnapshot,其中包含有关该特定时刻的活动路由信息
   * 与此路由匹配的URL提供了productId
   */
  ngOnInit() {
    // 首先从当前路径获取产品id
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId')); // 传入的id
    // 查找与route中提供的id对应的产品
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('你已经添加了一个产品到购物车!');
  }
}
