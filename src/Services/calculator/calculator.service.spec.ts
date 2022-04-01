import { CalculatorService } from './calculator.service';
import { LoggerService } from "../Logger/logger.service";

describe( 'CalculatorService',()=> {
    let loggerService: LoggerService;
    let calculatorService: CalculatorService;

    beforeEach(() => {
        loggerService = new LoggerService();

        calculatorService = new CalculatorService(loggerService);
        
    });

    it('should add two numbers', () => {
        let result = calculatorService.add(2,2);
        expect(result).toBe(4);
        expect(loggerService.log).toHaveBeenCalledTimes(1);
    });

    it("should subtarct two numbers", ()=> {
        let result = calculatorService.substract(8,2);
        expect(result).toBe(6);
        expect(loggerService.log).toHaveBeenCalledTimes(1);
    })
})

