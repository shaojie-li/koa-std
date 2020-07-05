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

@Controller("/user")
export default class UserController {
    @Get()
    @Authorized()
    getAll() {
        return "This action returns all users";
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
