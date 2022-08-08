package com.aem.sites.developer.core.models.projetos.appfly;

import javax.inject.Inject;

import com.adobe.cq.export.json.ComponentExporter;

public class AppFlyHeader implements ComponentExporter{

    static final String RESOURCE_TYPE = "aem-sites-developer/components/projetos/app-fly/app-fly-header";

    @Inject 
	private String logo;

    @Inject 
	private String background;

    @Inject 
	private String optionHome;

    @Inject 
	private String optionAbout;

    @Inject 
	private String optionPage;
    
    @Inject 
	private String optionFeatures;
    
    @Inject 
	private String optionCart;

    public String getLogo() {
		return logo;
	}

    public String getBackground() {
		return background;
	}

	public String getOptionHome() {
		return optionHome;
	}

    public String getOptionAbout() {
		return optionAbout;
	}

    public String getOptionPage() {
		return optionPage;
	}

    public String getOptionFeatures() {
		return optionFeatures;
	}

    public String getoptionCart() {
		return optionCart;
	}

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }

}
