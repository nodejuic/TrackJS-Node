import serialize from '../utils/serialize';
import { TelemetryData } from './TelemetryBuffer';

export default class ConsoleTelemetryData implements TelemetryData {

  message:string
  severity:string
  timestamp:string

  constructor(severity: string, ...messages: any) {
    this.severity = ConsoleTelemetryData.normalizeSeverity(severity);
    this.message = serialize(messages.length === 1 ? messages[0] : messages);
    this.timestamp = new Date().toISOString()
  }

  static normalizeSeverity(severity: string): string {
    severity = severity.toLowerCase();
    if (['debug','info','warn','error','log'].indexOf(severity) < 0) {
      return 'log';
    }
    return severity;
  }

}