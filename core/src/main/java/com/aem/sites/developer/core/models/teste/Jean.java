package com.aem.sites.developer.core.models.teste;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;

import com.adobe.cq.export.json.ComponentExporter;

@Model(adaptables = Resource.class)
public class Jean implements ComponentExporter{
    
    static final String RESOURCE_TYPE = "aem-sites-developer/components/modulo-teste/jean";

    @Inject 
	private String texto;
	
	public String getTexto() {
		return texto;
	}

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
