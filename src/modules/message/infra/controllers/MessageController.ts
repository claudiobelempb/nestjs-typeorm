import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MessageService } from '../../application/services/message.service';
import { MessageRequest } from '../requests/MessageRequest';
import { MessageEntity } from '../../domain/entities/MessageEntity';
import { MessageResponse } from '../../application/response/MessageResponse';
import { PaginationResponse } from 'src/shared/application/response/PagnationResponse';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(@Query() pagination: MessageRequest.Pagination) {
    return await this.messageService.findAll(pagination);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MessageResponse.Message> {
    return await this.messageService.findOne(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() request: MessageRequest.Create) {
    return await this.messageService.create(request);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() request: MessageRequest.Update,
  ): Promise<MessageEntity> {
    return await this.messageService.update(id, request);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch('active/:id')
  async updateIsActive(
    @Param('id') id: string,
    @Body() request: boolean,
  ): Promise<void> {
    await this.messageService.updateIsActive(id);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch('deactive/:id')
  async updateIsDeactive(
    @Param('id') id: string,
    @Body() request: boolean,
  ): Promise<void> {
    await this.messageService.updateIsDeactive(id);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch('read/:id')
  async updateIsRead(
    @Param('id') id: string,
    @Body() request: boolean,
  ): Promise<void> {
    await this.messageService.updateIsRead(id);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch('unread/:id')
  async updateIsReadUnread(
    @Param('id') id: string,
    @Body() request: boolean,
  ): Promise<void> {
    await this.messageService.updateIsUnread(id);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.messageService.delete(id);
  }
}
