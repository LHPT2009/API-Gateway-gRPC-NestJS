import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AuthController } from './controllers/auth.controller';
import { ProductController } from './controllers/product.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: join(__dirname, '../../protos/auth.proto'),
          url: 'localhost:50051',
        },
      },
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'product',
          protoPath: join(__dirname, '../../protos/product.proto'),
          url: 'localhost:50052',
        },
      },
    ]),
  ],
  controllers: [AuthController, ProductController],
  providers: [],
})
export class AppModule { }
