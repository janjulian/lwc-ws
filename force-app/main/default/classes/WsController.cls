public with sharing class WsController {

    @AuraEnabled
    public static String greetHello(String name) {
        return String.format('Hello {0}. The time is {1}', new String[] {
            name,
            Datetime.now().format()
        });
    }

    @AuraEnabled
    public static List<Account> getAllAccounts() {
        return [select Id, Name from Account order by CreatedDate desc];
    }
}
