import { LoggerService } from './logger.service';
describe("LoggerService", ()=> {
  let loggerService: LoggerService;

  beforeEach(() => {
    loggerService = new LoggerService();
  })

  it('length of message should empty at start', ()=> {
    let emptyArray = loggerService.messages.length;
    expect(emptyArray).toBe(0);
  });

  it('one message should be added in array', ()=> {
    loggerService.log('hello world');
    expect(loggerService.messages.length).toBe(1);
  });

  it('message should be clear',()=> {
    loggerService.log('hello world');
    loggerService.clear();

    expect(loggerService.messages.length).toBe(0);
  })
})
