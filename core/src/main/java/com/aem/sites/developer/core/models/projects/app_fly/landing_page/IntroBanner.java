package com.aem.sites.developer.core.models.projects.app_fly.landing_page;

import javax.inject.Inject;
import lombok.Getter;
import org.apache.sling.models.annotations.Model;
import com.adobe.cq.export.json.ComponentExporter;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import static org.apache.sling.models.annotations.DefaultInjectionStrategy.OPTIONAL;
import static lombok.AccessLevel.NONE;

@Getter
@Model( adaptables = SlingHttpServletRequest.class,
        adapters = { ComponentExporter.class, IntroBanner.class, },
		resourceType = IntroBanner.RESOURCE_TYPE,
		defaultInjectionStrategy = OPTIONAL)

public class IntroBanner implements ComponentExporter {

	static final String RESOURCE_TYPE = "aem-sites-developer/components/projects/app-fly/landing-page/intro-banner";

	@Getter(NONE)
	@Inject
    ResourceResolver resourceResolver;

	@ValueMapValue
	private String image;

	@ValueMapValue
	private String title;

	@ValueMapValue
	private String description;

	@ValueMapValue
	private String titleBtnApple;

	@ValueMapValue
	private String titleBtnAndroid;

	@ValueMapValue
	private String btnAppleLink;

	@ValueMapValue
	private String btnAndroidLink;

	@ValueMapValue
	private String btnIconApple;

	@ValueMapValue
	private String btnIconAndroid;

	@Override
	public String getExportedType() { return RESOURCE_TYPE; }
}
