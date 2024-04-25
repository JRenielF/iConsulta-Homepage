import { ScaleIcon, ShieldCheckIcon, CurrencyDollarIcon, ChatBubbleBottomCenterIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Clarity',
    description:
      'We communicate at the onset what we can do for you and what you can expect from us.',
    icon: ChatBubbleBottomCenterIcon,

  },
  {
    name: 'Concise',
    description: 'We can simplify the process because we value time and we want you to be on your way to building your dreams.',
    icon: ScaleIcon ,
  },
  {
    name: 'Certainty',
    description: 'Through comprehensive assessment and preparation, we can take you through each step of the journey successfully.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Certainty',
    description: 'It is our advocacy to get you there minus the unecessary stress and costs that come with lack of planning, knowledge and assistance.',
    icon: CurrencyDollarIcon,
  },
]

export default function Feature() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Partner With Us?</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://scontent.fmnl25-2.fna.fbcdn.net/v/t39.30808-6/423861998_790810906394780_181430485160264099_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG3_XueMRwAR9H8LU-0GHKpzWkn4Zr0AEbNaSfhmvQARtz7VFTCEfwBHDheJArSys9nN-UpnMHNIYjEGv1bDdrx&_nc_ohc=Q9TYBKxCLFIAb6lYb17&_nc_ht=scontent.fmnl25-2.fna&oh=00_AfD9ufdTOuiHuMO37jgZcOPWjIphzdLM60AvQB5A1jmNrQ&oe=662FEAEC"
            alt="Product screenshot"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}
