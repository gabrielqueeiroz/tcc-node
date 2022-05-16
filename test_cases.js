var webdriver = require("selenium-webdriver");
const {Builder, By, Key, until} = require("selenium-webdriver");
var assert = require("assert");

let driver = new webdriver.Builder().forBrowser("chrome").build();

let person = {
    "name": "Tcc",
    "last_name": "Gabriel",
    "contact_first_name": "Teste",
    "phone": "92 9999-9999",
    "addressLine1": "Av Darcy Vargas, 1200",
    "addressLine2": "Stem",
    "city": "Manaus",
    "state": "AM",
    "postal_code": "69050-020",
    "country": "Brasil",
    "from_employeer": "Fixter",
    "credit_limit": "200" 
};

describe('User', function(){
    this.beforeAll(async function() {
        await driver.manage().setTimeouts({ implicit: 20000, pageLoad: 20000})
    });

    it("Register User", async function(){
        try{
            driver.manage().window().maximize();
            driver.get("https://www.grocerycrud.com/v1.x/demo/my_boss_is_in_a_hurry/bootstrap");

            await driver
                .findElement(By.xpath("/html/body/div[1]/select/option[4]"))
                .click();
            await driver
                .findElement(By.xpath("//*[@id=\"gcrud-search-form\"]/div[1]/div[1]/a"))
                .click();
            await driver
                .findElement(By.xpath("//*[@id=\"field-customerName\"]"))
                .sendKeys(person.name);
            await driver
                .findElement(By.xpath("//*[@id=\"field-contactLastName\"]"))
                .sendKeys(person.last_name);
            await driver
                .findElement(By.xpath("//*[@id=\"field-contactFirstName\"]"))
                .sendKeys(person.contact_first_name);
            await driver
                .findElement(By.xpath("//*[@id=\"field-phone\"]"))
                .sendKeys(person.addressLine1);
            await driver
                .findElement(By.xpath("//*[@id=\"field-addressLine1\"]"))
                .sendKeys(person.addressLine2);
            await driver
                .findElement(By.xpath("//*[@id=\"field-addressLine2\"]"))
                .sendKeys(person.city);
            await driver
                .findElement(By.xpath("//*[@id=\"field-city\"]"))
                .sendKeys(person.state);
            await driver
                .findElement(By.xpath("//*[@id=\"field-postalCode\"]"))
                .sendKeys(person.postal_code);
            await driver
                .findElement(By.xpath("//*[@id=\"field-country\"]"))
                .sendKeys(person.country);
            await driver
                .findElement(By.xpath("//*[@id=\"field-salesRepEmployeeNumber\"]"))
                .sendKeys(person.from_employeer);
            await driver
                .findElement(By.xpath("//*[@id=\"field-creditLimit\"]"))
                .sendKeys(person.credit_limit);
            await driver
                .findElement(By.xpath("//*[@id=\"form-button-save\"]"))
                .click();
            await driver
            .wait(
            until.elementIsVisible
                    (await driver.findElement
                    (By.xpath("//*[@id=\"report-success\"]"))
                    ), 20000);
            let form_message = await driver
                .findElement(By.xpath("//*[@id=\"report-success\"]"))
                .getText()
                .then(function(value){
                return value;
                });
      
            assert.strictEqual(form_message, "Your data has been successfully stored into the database. Edit Record or Go back to list");
          }catch(e){
            console.log("Error: ", e.message)
            await driver.executeScript(
              'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Some elements failed to load."}}'
            );
          }
      });

    it("Remove User", async function(){
        driver.manage().window().maximize();
        driver.get("https://www.grocerycrud.com/v1.x/demo/my_boss_is_in_a_hurry/bootstrap");

        await driver
            .findElement(By.xpath("/html/body/div[1]/select/option[4]"))
            .click();
        await driver
            .findElement(By.xpath("//*[@id=\"gcrud-search-form\"]/div[1]/div[1]/a"))
            .click();
        
        await driver
            .findElement(By.xpath("//*[@id=\"field-customerName\"]"))
            .sendKeys(person.name);

        await driver
            .findElement(By.xpath("//*[@id=\"field-contactLastName\"]"))
            .sendKeys(person.last_name);
        
        await driver
            .findElement(By.xpath("//*[@id=\"field-contactFirstName\"]"))
            .sendKeys(person.contact_first_name);
        
        await driver
            .findElement(By.xpath("//*[@id=\"field-phone\"]"))
            .sendKeys(person.phone);
        
        await driver
            .findElement(By.xpath("//*[@id=\"field-addressLine1\"]"))
            .sendKeys(person.addressLine1);
        
        await driver
            .findElement(By.xpath("//*[@id=\"field-addressLine2\"]"))
            .sendKeys(person.addressLine2);
        
        await driver
            .findElement(By.xpath("//*[@id=\"field-city\"]"))
            .sendKeys(person.city);
        
        await driver
            .findElement(By.xpath("//*[@id=\"field-state\"]"))
            .sendKeys(person.state);
        
        await driver
            .findElement(By.xpath("//*[@id=\"field-postalCode\"]"))
            .sendKeys(person.postal_code);
        
        await driver
            .findElement(By.xpath("//*[@id=\"field-country\"]"))
            .sendKeys(person.country);
        
        await driver
            .findElement(By.xpath("//*[@id=\"field-salesRepEmployeeNumber\"]"))
            .sendKeys(person.from_employeer);
        
        await driver
            .findElement(By.xpath("//*[@id=\"field-creditLimit\"]"))
            .sendKeys(person.credit_limit);
        
        await driver
            .findElement(By.xpath("//*[@id=\"save-and-go-back-button\"]"))
            .click();

        await driver
        .wait(
        until.elementIsVisible
            (await driver.findElement
            (By.xpath("/html/body/div[2]/div[2]/div[1]/div[2]/form/div[2]/table/thead/tr[2]/td[3]/input"))
            ), 20000);

        await driver
                .findElement(By.xpath("/html/body/div[2]/div[2]/div[1]/div[2]/form/div[2]/table/thead/tr[2]/td[3]/input"))
                .sendKeys(person.name);
        
        await driver
                .findElement(By.xpath("/html/body/div[2]/div[2]/div[1]/div[2]/form/div[2]/table/thead/tr[2]/td[2]/div[2]/a"))
                .click();
        
        await driver
            .wait(
            until.elementIsVisible
                (await driver.findElement
                (By.xpath("/html/body/div[3]"))
                ), 20000);

        await driver
                .findElement(By.xpath("//*[@id=\"gcrud-search-form\"]/div[2]/table/thead/tr[2]/td[1]/div/input"))
                .click();

        await driver
            .wait(
            until.elementIsVisible
                (await driver.findElement
                (By.xpath("//*[@id=\"gcrud-search-form\"]/div[2]/table/thead/tr[2]/td[2]/div[1]/a"))
                ), 20000);
                
        await driver
                .findElement(By.xpath("//*[@id=\"gcrud-search-form\"]/div[2]/table/thead/tr[2]/td[2]/div[1]/a"))
                .click();

        await driver
            .wait(
            until.elementIsVisible
                (await driver.findElement
                (By.xpath("/html/body/div[2]/div[2]/div[3]/div/div/div[3]/button[1]"))
                ), 20000);
        
        let delete_message = await driver
            .findElement(By.xpath("/html/body/div[2]/div[2]/div[3]/div/div/div[2]/p[2]"))
            .getText()
            .then(function(value){
                return value;
            });

        assert.strictEqual(delete_message, "Are you sure that you want to delete this 1 item?");
        
        await driver
                .findElement(By.xpath("/html/body/div[2]/div[2]/div[3]/div/div/div[3]/button[2]"))
                .click();

        await driver
        .wait(
        until.elementIsVisible
            (await driver.findElement
            (By.xpath("/html/body/div[4]/span[3]/p"))
            ), 20000);
        
        let popup_message = await driver
            .findElement(By.xpath("/html/body/div[4]/span[3]/p"))
            .getText()
            .then(function(value){
            return value;
            });

        assert.strictEqual(popup_message, "Your data has been successfully deleted from the database.");

        });

    it("Check Columns", async function(){
        driver.manage().window().maximize();
        driver.get("https://www.grocerycrud.com/v1.x/demo/my_boss_is_in_a_hurry/bootstrap");

        let column_1 = await driver
                .findElement(By.xpath("//*[@id=\"gcrud-search-form\"]/div[2]/table/thead/tr[1]/th[1]"))
                .getText()
                .then(function(value){
                return value;
                });
        let column_2 = await driver
        .findElement(By.xpath("//*[@id=\"gcrud-search-form\"]/div[2]/table/thead/tr[1]/th[2]"))
        .getText()
        .then(function(value){
        return value;
        });

        let column_3 = await driver
        .findElement(By.xpath("//*[@id=\"gcrud-search-form\"]/div[2]/table/thead/tr[1]/th[3]"))
        .getText()
        .then(function(value){
        return value;
        });

        let column_4 = await driver
        .findElement(By.xpath("//*[@id=\"gcrud-search-form\"]/div[2]/table/thead/tr[1]/th[4]"))
        .getText()
        .then(function(value){
        return value;
        });
        
        let column_5 = await driver
        .findElement(By.xpath("//*[@id=\"gcrud-search-form\"]/div[2]/table/thead/tr[1]/th[5]"))
        .getText()
        .then(function(value){
        return value;
        });
      
        assert.strictEqual(column_1, "Actions");
        assert.strictEqual(column_2, "CustomerName");
        assert.strictEqual(column_3, "Phone");
        assert.strictEqual(column_4, "AddressLine1");
        assert.strictEqual(column_5, "CreditLimit");
    });

    this.afterAll(async function() {
        await driver.quit();
    });
})