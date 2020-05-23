import { PipeTransform, BadRequestException } from '@nestjs/common';
import { CommentStatus } from '@napho/data';

export class CommentStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    CommentStatus.pending,
    CommentStatus.approved,
    CommentStatus.rejected
  ];

  transform(value: any) {
    value = value.toLowerCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid status`)
    }

    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }
}
