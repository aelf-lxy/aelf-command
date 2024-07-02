import { Command } from 'commander';
import BaseSubCommand from './baseSubCommand';
import Registry from '../rc/index';

declare class LoadCommand extends BaseSubCommand {
  constructor(rc: Registry);
  run(commander: Command, ...args: any[]): Promise<void>;
}
export default LoadCommand;
