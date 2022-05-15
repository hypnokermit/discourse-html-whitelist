export function setup(helper) {
    helper.registerOptions((opts, siteSettings)=>{
      opts.features['dropcaps'] = true; //!!siteSettings.dropcaps_enabled;
    });
  
    helper.allowList(["div.alert"]);
    helper.allowList(["div.alert.alert-silver"]);
    helper.allowList(["div.alert.alert-info"]);
    helper.allowList(["div.alert.alert-success"]);
    helper.allowList(["div.alert.alert-warning"]);
    helper.allowList(["div.alert.alert-error"]);
    helper.allowList(["div[class]"]);
    helper.allowList(["div[style]"]);
    helper.allowList(["span[class]"]);
    helper.allowList(["font[color]"]);
    helper.allowList(["info"]);
    helper.allowList(["todo"]);
    helper.allowList(["warn"]);
    helper.allowList(["alert"]);
    helper.allowList(["success"]);
    helper.allowList(["msg"]);

    console.log(
        "Automation Custom Tags Plugin"
      );    
  }
