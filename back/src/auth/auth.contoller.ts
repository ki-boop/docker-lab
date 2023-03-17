import { Controller, Post, Body, Get, Param, Redirect } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegistrationModel } from "./dto/registration.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("regisration")
  create(@Body() registrationDto: RegistrationModel) {
    return this.authService.registration(
      registrationDto.email,
      registrationDto.password
    );
  }

  @Get("activate/:link")
  @Redirect()
  activate(@Param("link") activationLink: string) {
    try {
      this.authService.activate(activationLink);
      return { url: process.env.API_URL_CLIENT };
    } catch (e) {
      return e;
    }
  }
}
