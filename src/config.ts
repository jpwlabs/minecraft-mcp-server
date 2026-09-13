import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export interface ServerConfig {
  host: string;
  port: number;
  username: string;
  auth: 'offline' | 'microsoft';
  profilesFolder?: string;
  readOnly: boolean;
}

export function parseConfig(): ServerConfig {
  return yargs(hideBin(process.argv))
    .option('host', {
      type: 'string',
      description: 'Minecraft server host',
      default: 'localhost'
    })
    .option('port', {
      type: 'number',
      description: 'Minecraft server port',
      default: 25565
    })
    .option('username', {
      type: 'string',
      description: 'Bot username',
      default: 'LLMBot'
    })
    .option('auth', {
      choices: ['offline', 'microsoft'] as const,
      description: 'Minecraft authentication mode',
      default: 'offline' as const
    })
    .option('profiles-folder', {
      type: 'string',
      description: 'Persistent prismarine-auth profile directory for Microsoft auth'
    })
    .option('read-only', {
      type: 'boolean',
      description: 'Expose only the closed JPW Labs observation tool allowlist',
      default: false
    })
    .help()
    .alias('help', 'h')
    .parseSync() as ServerConfig;
}
