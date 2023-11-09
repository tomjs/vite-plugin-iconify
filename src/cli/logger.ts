import colors from 'picocolors';

class Logger {
  private tag = '';

  constructor(tag: string) {
    this.tag = `[${tag}]`;
  }

  debug(msg: any, ...rest: any[]) {
    console.log(`${colors.gray(this.tag)}`, msg, ...rest);
  }

  info(msg: any, ...rest: any[]) {
    console.log(`${colors.blue(this.tag)}`, msg, ...rest);
  }

  warn(msg: string, ...rest: any[]) {
    console.log(`${colors.yellow(this.tag)}`, msg, ...rest);
  }

  error(msg: any, ...rest: any[]) {
    console.log(`${colors.red(this.tag)}`, msg, ...rest);
  }

  success(msg: any, ...rest: any[]) {
    console.log(`${colors.green(this.tag)}`, msg, ...rest);
  }
}

export default Logger;
