import { Injectable, Get } from '@nestjs/common';

@Injectable()
export class BlogService {
    @Get()
    getBlogs() {
        return 'All Blogs from BlogService';
  }
}