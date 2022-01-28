import { EmailService } from './../email/email.service';
import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';

@Injectable()
export class UsersService {
  constructor(private emailService: EmailService) {}

  async createUser(name: string, email: string, password: string) {
    await this.checkUserExists(email);

    const signupVerifyToken = uuid.v1();
    await this.saveUser(name, email, password, signupVerifyToken);
  }

  private checkUserExists(emil: string) {
    return false; // TODO: DB 연동 후 구현
  }

  private saveUser(
    name: string,
    email: string,
    password: string,
    signupVerifyToken: string,
  ) {
    return; // TODO: DB 연동후 구현
  }

  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    await this.emailService.sendMemberJoinVerification(
      email,
      signupVerifyToken,
    );
  }

  async verifyEmail(signupVerifyToken: string): Promise<string> {
    // TODO
    // 1. DB에서 signupVerifyToken으로 회원 가입 처리중인 유저가 있는지 조회하고 없다면 에러처리
    // 2. 바로 로그인 상태가 되도록 JWT 발급
    throw new Error('Method not implemented');
  }

  async login(email: string, password: string): Promise<string> {
    // TODO
    // 1. email, password를 가진 유저가 존재하는지 DB에서 확인하고 없다면 에러처리
    // 2. JWT 토큰 발급
    throw new Error('Method not implemented');
    return 'Method not implemented';
  }

  async getUserInfo(userId: string): Promise<string> {
    // TODO
    // 1. userId를 가진 유저가 존재하는지 DB에서 확인하고 없다면 에러처리
    // 2. 조회된 데이터를 UserInfo타입으로 응답
    throw new Error('Method not implemented.');
  }
}
