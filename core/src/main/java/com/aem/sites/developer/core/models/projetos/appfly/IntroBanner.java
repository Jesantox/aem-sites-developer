package com.aem.sites.developer.core.models.projetos.appfly;

import javax.inject.Inject;
import org.apache.sling.models.annotations.Model;
import com.adobe.cq.export.json.ComponentExporter;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import static org.apache.sling.models.annotations.DefaultInjectionStrategy.OPTIONAL;

@Model( adaptables = SlingHttpServletRequest.class,
        adapters = { ComponentExporter.class, IntroBanner.class, }, 
		resourceType = IntroBanner.RESOURCE_TYPE,
		defaultInjectionStrategy = OPTIONAL)

public class IntroBanner implements ComponentExporter {

	static final String RESOURCE_TYPE = "aem-sites-developer/components/projetos/app-fly/intro-banner";

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

	public String getImage() { return image; }

	public String getTitle() { return title; }
	
	public String getDescription() { return description; }

	public String getTitleBtnApple() { return titleBtnApple; }

	public String getTitleBtnAndroid() { return titleBtnAndroid; }

	public String getbtnAppleLink() { return btnAppleLink; }

	public String getbtnAndroidLink() { return btnAndroidLink; }

	public String getbtnIconApple() { return btnIconApple; }
	
	public String getbtnIconAndroid() { return btnIconAndroid; }

	@Override
	public String getExportedType() { return RESOURCE_TYPE; }
}
