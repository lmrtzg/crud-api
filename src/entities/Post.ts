class Post {
  public post: string;

  public user: string;

  public date: Date;

  public customId: string;

  constructor(post: string, user: string, date: Date, customId: string) {
    this.post = post;
    this.user = user;
    this.date = date;
    this.customId = customId;
  }
}

export default Post;
