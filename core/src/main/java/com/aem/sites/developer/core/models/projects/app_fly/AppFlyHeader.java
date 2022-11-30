package com.aem.sites.developer.core.models.projects.app_fly;

import java.util.List;
import javax.inject.Inject;
import lombok.Getter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import com.adobe.cq.export.json.ComponentExporter;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import static lombok.AccessLevel.NONE;
import static org.apache.sling.models.annotations.DefaultInjectionStrategy.OPTIONAL;

@Getter
@Model( adaptables = SlingHttpServletRequest.class,
        adapters = { ComponentExporter.class, AppFlyHeader.class, },
		resourceType = AppFlyHeader.RESOURCE_TYPE,
		defaultInjectionStrategy = OPTIONAL)

public class AppFlyHeader implements ComponentExporter {

	static final String RESOURCE_TYPE = "aem-sites-developer/components/projects/app-fly/app-fly-header";

	@Getter(NONE)
	@Inject
    ResourceResolver resourceResolver;

	@ValueMapValue
	private String logo;

	@ValueMapValue
	private String background;

	@ChildResource
	List<Resource> options;

	@Override
	public String getExportedType() {
		return RESOURCE_TYPE;
	}
}
