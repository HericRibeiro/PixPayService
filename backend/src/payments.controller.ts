import { Controller, Post, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import * as QRCode from 'qrcode';

@Controller('/payments')
export class PaymentsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('/pix')
  async createPixPayment(@Body() body: any) {
    const novaTransacao = await this.transactionsService.create({
      amount: body.amount,
      status: 'pendente',
      customerName: body.customerName || '',
      city: body.city || '',
    });

    const payload = process.env.QR_PAYLOAD || ''; // PEGANDO DO .env
    const qrDataUrl = await QRCode.toDataURL(payload);

    return {
      message: 'Transação criada com sucesso',
      transaction: novaTransacao,
      qr_code_image_base64: qrDataUrl,
      qr_code_copy_paste: process.env.PIX_COPY_PASTE || '',
    };
  }
}
