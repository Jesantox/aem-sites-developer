package com.aem.sites.developer.core.models.projetos.appfly;

import java.util.List;
import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import com.adobe.cq.export.json.ComponentExporter;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import static org.apache.sling.models.annotations.DefaultInjectionStrategy.OPTIONAL;

@Model( adaptables = SlingHttpServletRequest.class,
        adapters = { ComponentExporter.class, AppFlyHeader.class, }, 
		resourceType = AppFlyHeader.RESOURCE_TYPE,
		defaultInjectionStrategy = OPTIONAL)

public class AppFlyHeader implements ComponentExporter {

	static final String RESOURCE_TYPE = "aem-sites-developer/components/projetos/app-fly/app-fly-header";

	@Inject
    ResourceResolver resourceResolver;

	@ValueMapValue
	private String logo;

	@Inject
	private String background;

	@ChildResource
	List<Resource> options;

	public String getLogo() {
		return logo;
	}

	public String getBackground() {
		return background;
	}

	public List<Resource> getOptions() {
		return options;
	}

	@Override
	public String getExportedType() {
		return RESOURCE_TYPE;
	}
}
