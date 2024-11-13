import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';

import { ClientGrpc } from '@nestjs/microservices';

@Controller('product')
export class ProductController implements OnModuleInit {
    private productsService;
    constructor(
        @Inject('PRODUCT_SERVICE') private client: ClientGrpc,
    ) { }
    onModuleInit() {
        this.productsService = this.client.getService('ProductsService');
    }

    @Get()
    async getProduct() {
        return this.productsService.GetProduct({ name: 'productdemo' });
    }
}