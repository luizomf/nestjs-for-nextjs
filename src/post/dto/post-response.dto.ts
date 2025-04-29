import { Post } from '../entities/post.entity';

export class PostResponseDto {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly content: string;
  readonly excerpt: string;
  readonly coverImageUrl: string | null;
  readonly published: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly author: {
    id: string;
    name: string;
    email: string;
  };

  constructor(post: Post) {
    this.id = post.id;
    this.title = post.title;
    this.slug = post.slug;
    this.content = post.content;
    this.excerpt = post.excerpt;
    this.coverImageUrl = post.coverImageUrl;
    this.published = post.published;
    this.createdAt = post.createdAt;
    this.updatedAt = post.updatedAt;
    this.author = {
      id: post.author.id,
      name: post.author.name,
      email: post.author.email,
    };
  }
}
