package com.aem.sites.developer.core.models.projects.app_fly;

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
        adapters = { ComponentExporter.class, Footer.class, },
		resourceType = Footer.RESOURCE_TYPE,
		defaultInjectionStrategy = OPTIONAL)

public class Footer implements ComponentExporter {

	static final String RESOURCE_TYPE = "aem-sites-developer/components/projects/app-fly/footer";

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

	public String getLogo() {
		return logo;
	}

	public String getDescription() {
		return description;
	}

	public String getTitlePage() {
		return titlePage;
	}

	public String getTitleUtilPage() {
		return titleUtilPage;
	}

	public List<Resource> getListPage() {
		return listPage;
	}

	public List<Resource> getListUtilPage() {
		return listUtilPage;
	}

	public String getMoreTemplateText() {
		return moreTemplateText;
	}

	public String getMoreTemplateLink() {
		return moreTemplateLink;
	}

	public String getTitleSocialNetwork() {
		return titleSocialNetwork;
	}

	public List<Resource> getListSocialNetwork() {
		return listSocialNetwork;
	}

	@Override
	public String getExportedType() {
		return RESOURCE_TYPE;
	}
}
