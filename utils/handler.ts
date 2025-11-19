import { page, type RouteHandler } from "fresh";

type DefaultAdditionalArgs = Record<PropertyKey, unknown | undefined>;

export type HandlerData<AdditionalArgs = DefaultAdditionalArgs> = {
	title?: string;
	description?: string;
} & AdditionalArgs;

export const defaultHandlerFunction = <AdditionalArgs = DefaultAdditionalArgs>(
	data: HandlerData<AdditionalArgs>
) =>
	page<HandlerData<AdditionalArgs>>({
		...data,
	});

export const basicHandler = ({
	title,
	description,
	...otherData
}: HandlerData): RouteHandler<HandlerData, unknown> => ({
	GET() {
		return page({
			title,
			description,
			...otherData,
		});
	},
});
