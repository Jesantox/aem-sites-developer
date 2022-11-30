package com.aem.sites.developer.core.models.projects.app_fly.landing_page;

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

import static org.apache.sling.models.annotations.DefaultInjectionStrategy.OPTIONAL;
import static lombok.AccessLevel.NONE;

@Getter
@Model( adaptables = SlingHttpServletRequest.class,
        adapters = { ComponentExporter.class, PresentationChannels.class, },
		resourceType = PresentationChannels.RESOURCE_TYPE,
		defaultInjectionStrategy = OPTIONAL)

public class PresentationChannels implements ComponentExporter {

	static final String RESOURCE_TYPE = "aem-sites-developer/components/projects/app-fly/landing-page/presentation-channels";

	@Getter(NONE)
	@Inject
    ResourceResolver resourceResolver;

	@ValueMapValue
	private String text;

	@ChildResource
	List<Resource> listChannel;

	@Override
	public String getExportedType() {
		return RESOURCE_TYPE;
	}
}
