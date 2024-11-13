import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';

import { ClientGrpc } from '@nestjs/microservices';

@Controller('auth')
export class AuthController implements OnModuleInit {
    private authsService;
    constructor(
        @Inject('AUTH_SERVICE') private client: ClientGrpc,
    ) { }
    onModuleInit() {
        this.authsService = this.client.getService('AuthsService');
    }

    @Get()
    async getAuths() {
        return this.authsService.GetAuth({ email: 'Jon@gmail.com' });
    }
}