import {
    Authorized,
    Controller,
    Param,
    Ctx,
    Body,
    Get,
    Post,
    Put,
    Delete,
} from "routing-controllers";

import { UserModel } from "../model/User";

@Controller("/user")
export default class UserController {
    @Get()
    getAll(@Ctx() { ...currentUser }) {
        console.log(currentUser);
        return `This action returns all users`;
    }

    @Get("/:id")
    getOne(@Param("id") id: number) {
        return "This action returns user #" + id;
    }

    @Post()
    post(@Body() user: any) {
        return "Saving user...";
    }

    @Put("/:id")
    put(@Param("id") id: number, @Body() user: any) {
        return "Updating a user...";
    }

    @Delete("/:id")
    remove(@Param("id") id: number) {
        return "Removing user...";
    }
}
