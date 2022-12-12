import { IOptions } from '../../utils/interface';
import Contact from './contact';
import SponsorSection from './sponsor';

const dynamicBlocks: any = {
    contactSection: Contact,
    sponsorSection: SponsorSection
};

export default function DynamicBlocks({
    postData,
    className,
    options
}: {
    postData: any;
    ID?: number;
    className?: string;
    options?: IOptions;
}) {
    const { acf, ID, post_name } = postData || {};
    return (
        <>
            {acf?.mainContentBlocks?.length! > 0 &&
                acf?.mainContentBlocks?.map(
                    (
                        { acf_fc_layout, ...props }: { acf_fc_layout: any },
                        i: any
                    ) => {
                        if (dynamicBlocks[acf_fc_layout] === null) {
                            return null;
                        }
                        const Template = dynamicBlocks[acf_fc_layout];
                        return (
                            <Template
                                key={`dynamic-content-block-${acf_fc_layout}-${i}`}
                                post_name={post_name}
                                options={options}
                                {...props}
                            />
                        );
                    }
                )}
        </>
    );
}
