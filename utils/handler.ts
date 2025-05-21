import { FreshContext, Handlers } from "$fresh/server.ts";

type DefaultAdditionalArgs = Record<PropertyKey, unknown | undefined>;

export type HandlerData<AdditionalArgs = DefaultAdditionalArgs> = {
	title?: string;
	description?: string;
} & AdditionalArgs;

export const defaultHandlerFunction = <AdditionalArgs = DefaultAdditionalArgs>(
	_req: Request,
	ctx: FreshContext<unknown, HandlerData>,
	data?: HandlerData<AdditionalArgs>,
) => {
	return ctx.render({
		...data,
	});
};

export const basicHandler = ({
	title,
	description,
	...otherData
}: HandlerData): Handlers => ({
	GET(_req, ctx) {
		return ctx.render({
			data: {
				title,
				description,
				...otherData,
			},
		});
	},
});
