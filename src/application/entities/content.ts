export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validadeContentLength(content: string): boolean {
    const valueMin = 5;
    const valueMax = 240;

    return content.length >= valueMin && content.length <= valueMax;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validadeContentLength(content);

    if (!isContentLengthValid) {
      throw new Error(`Content length error`);
    }

    this.content = content;
  }
}
