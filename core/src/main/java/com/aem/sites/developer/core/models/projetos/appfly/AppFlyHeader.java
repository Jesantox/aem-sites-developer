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
	private String optionOne;

    @Inject 
	private String optionTwo;

    @Inject 
	private String optionThree;
    
    @Inject 
	private String optionFor;
    
    @Inject 
	private String optionFive;

    public String getLogo() {
		return logo;
	}

    public String getBackground() {
		return background;
	}

	public String getOptionOne() {
		return optionOne;
	}

    public String getOptionTwo() {
		return optionTwo;
	}

    public String getOptionThree() {
		return optionThree;
	}

    public String getOptionFor() {
		return optionFor;
	}

    public String getOptionFive() {
		return optionFive;
	}

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }

}
