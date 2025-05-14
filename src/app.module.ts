import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { CondicaoModule } from './condicao/condicao.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { ReferenciaModule } from './referencia/referencia.module';
import { AncestralidadeModule } from './ancestralidade/ancestralidade.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      //autoSchemaFile: true,
      sortSchema: true,
      playground: true,
      installSubscriptionHandlers: false,
      useGlobalPrefix: true,
      path: '/graphql',
    }),

    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URI,
        dbName: process.env.DB_NAME,
        connectTimeoutMS: 3000,
      }),
    }),

    CondicaoModule,
    ReferenciaModule,
    AncestralidadeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
