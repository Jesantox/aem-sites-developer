package com.aem.sites.developer.core.models.fylo.header;

import javax.inject.Inject;

import com.adobe.cq.export.json.ComponentExporter;

public class Header implements ComponentExporter{

    static final String RESOURCE_TYPE = "aem-sites-developer/components/fylo/header";

    @Inject 
	private String background;

    @Inject 
	private String menuOptionOne;

    @Inject 
	private String menuOptionTwo;

    @Inject 
	private String menuOptionThree;

    public String getBackground() {
		return background;
	}
	
	public String getMenuOptionOne() {
		return menuOptionOne;
	}

    public String getMenuOptionTwo() {
		return menuOptionTwo;
	}

    public String getMenuOptionThree() {
		return menuOptionThree;
	}

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
    
}
