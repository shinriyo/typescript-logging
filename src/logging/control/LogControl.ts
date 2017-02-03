import {CategoryControl, CategoryControlImpl} from "./CategoryControl";
import {LoggerControl, LoggerFactoryControlImpl} from "./LogGroupControl";

/**
 * LogControl interface
 */
export interface LogControl {

  /**
   * Prints the help.
   */
  help(): void;

  /**
   * Shows an example on usage.
   */
  example(): void;

  /**
   * Return LoggerControl object related to LFService/LoggerFactories.
   */
  getLFServiceControl(): LoggerControl;

  /**
   * Return CategoryControl object.
   */
  getCategoryControl(): CategoryControl;

}

export class LogControlImpl implements LogControl {

  /* tslint:disable:no-trailing-whitespace */
  private static _help: string =
`
  help()
    ** Shows this help.
    
  example()
    ** Shows code example with short explanation on using this.

  getLogGroupControl(): LogGroupControl
    ** Returns LogGroupControl object.
    ** Can be used to control LogGroups

  getCategoryControl(): CategoryControl
    ** Returns CategoryControl object.
`;

  private static _example: string =
`
  // First line you already did, or you would not see this example.
  const lc = TSL.getLogControl();
  lc.help(); // Prints help
  const lgc = lc.getLogGroupControl();  // Retrieve LogGroupControl object
    
`;
  /* tslint:enable:no-trailing-whitespace */

  public help(): void {
    /* tslint:disable:no-console */
    console.log(LogControlImpl._help);
    /* tslint:enable:no-console */
  }

  public example(): void {
    /* tslint:disable:no-console */
    console.log(LogControlImpl._example);
    /* tslint:enable:no-console */
  }

  public getLFServiceControl(): LoggerControl {
    return new LoggerFactoryControlImpl();
  }

  public getCategoryControl(): CategoryControl {
    return new CategoryControlImpl();
  }
}