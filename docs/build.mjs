import README from 'readme-components';
import package_data from '../package.json' assert { type: 'json' };

const template = new README();

template.use_component('./template.md', {
  name: package_data.name,
  description: package_data.description,
  report_bug: package_data.bugs.url,
  request_feature: package_data.bugs.url,
  long_description: 'is a cross-platform dependency free ip-assignment module. With ez-ip, you can easily configure network interfaces in your own projects.',
  package: package_data.name,
  author: package_data.author.name,
  email: package_data.author.email,
  license: package_data.license
});

template.make_readme();

