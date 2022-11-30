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

import static org.apache.sling.models.annotations.DefaultInjectionStrategy.OPTIONAL;
import static lombok.AccessLevel.NONE;
@Getter
@Model( adaptables = SlingHttpServletRequest.class,
        adapters = { ComponentExporter.class, Footer.class, },
		resourceType = Footer.RESOURCE_TYPE,
		defaultInjectionStrategy = OPTIONAL)

public class Footer implements ComponentExporter {

	static final String RESOURCE_TYPE = "aem-sites-developer/components/projects/app-fly/footer";

	@Getter(NONE)
	@Inject
    ResourceResolver resourceResolver;

	@ValueMapValue
	private String logo;

	@ValueMapValue
	private String description;

	@ValueMapValue
	private String titlePage;

	@ValueMapValue
	private String titleUtilPage;

	@ChildResource
	List<Resource> listPage;

	@ChildResource
	List<Resource> listUtilPage;

	@ValueMapValue
	private String moreTemplateText;

	@ValueMapValue
	private String moreTemplateLink;

	@ValueMapValue
	private String titleSocialNetwork;

	@ChildResource
	List<Resource> listSocialNetwork;

	@Override
	public String getExportedType() {
		return RESOURCE_TYPE;
	}
}
