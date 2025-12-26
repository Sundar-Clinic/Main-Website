'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { GetAllPostsQueryResult } from '@/@types/cms';
import BlogCard from '../cards/BlogCard';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { useBlogs } from '@/lib/hooks/useBlogs';
import { cn } from '@/lib/utils';

interface Props extends React.ComponentProps<'section'> {
	posts: GetAllPostsQueryResult;
	locale: LocaleLanguages;
}

const POSTS_PER_PAGE = 9;

const AllBlogs: React.FC<Props> = ({ posts, locale }) => {
	const t = useTranslations('pages.blogs');
	const { data: allPosts = [] } = useBlogs(posts);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategoryId, setSelectedCategoryId] = useState('all');
	const [currentPage, setCurrentPage] = useState(1);

	const categories = useMemo(() => {
		const categoryMap = new Map<
			string,
			NonNullable<GetAllPostsQueryResult[number]['categories']>[number]
		>();

		allPosts.forEach((post) => {
			post.categories?.forEach((category) => {
				if (category?._id && !categoryMap.has(category._id)) {
					categoryMap.set(category._id, category);
				}
			});
		});

		return Array.from(categoryMap.values()).sort((a, b) =>
			(a?.title?.[locale] ?? '').localeCompare(b?.title?.[locale] ?? '')
		);
	}, [allPosts, locale]);

	const filteredPosts = useMemo(() => {
		const normalizedSearch = searchTerm.trim().toLowerCase();

		return allPosts.filter((post) => {
			const title = post?.title?.[locale] ?? '';
			const matchesSearch = normalizedSearch
				? title.toLowerCase().includes(normalizedSearch)
				: true;
			const matchesCategory =
				selectedCategoryId === 'all'
					? true
					: post.categories?.some((category) => category?._id === selectedCategoryId);

			return matchesSearch && matchesCategory;
		});
	}, [allPosts, locale, searchTerm, selectedCategoryId]);

	const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));

	useEffect(() => {
		setCurrentPage(1);
	}, [searchTerm, selectedCategoryId]);

	useEffect(() => {
		if (currentPage > totalPages) {
			setCurrentPage(totalPages);
		}
	}, [currentPage, totalPages]);

	const paginatedPosts = useMemo(() => {
		const start = (currentPage - 1) * POSTS_PER_PAGE;
		return filteredPosts.slice(start, start + POSTS_PER_PAGE);
	}, [currentPage, filteredPosts]);

	const pageItems = useMemo(() => {
		if (totalPages <= 1) {
			return [1];
		}

		const pages: Array<number | 'ellipsis'> = [1];
		const start = Math.max(2, currentPage - 1);
		const end = Math.min(totalPages - 1, currentPage + 1);

		if (start > 2) {
			pages.push('ellipsis');
		}

		for (let page = start; page <= end; page += 1) {
			pages.push(page);
		}

		if (end < totalPages - 1) {
			pages.push('ellipsis');
		}

		if (totalPages > 1) {
			pages.push(totalPages);
		}

		return pages;
	}, [currentPage, totalPages]);

	return (
		<section className='container' id='blog-list'>
			<h1 className='text-2xl font-heading text-center font-medium'>
				{t('heading')}
			</h1>
			<hr className='border-b-4 max-w-[10rem] border-b-primary-clinic rounded-lg mx-auto mt-2' />
			<div className='mt-10 flex flex-col gap-4 rounded-2xl border border-border/60 bg-white/80 p-6 shadow-sm md:flex-row md:items-end md:justify-between'>
				<div className='w-full md:max-w-sm'>
					<label className='text-sm font-medium text-muted-foreground'>
						{t('filters.searchLabel')}
					</label>
					<Input
						value={searchTerm}
						onChange={(event) => setSearchTerm(event.target.value)}
						placeholder={t('filters.searchPlaceholder')}
						className='mt-2'
					/>
				</div>
				<div className='w-full md:max-w-xs'>
					<label className='text-sm font-medium text-muted-foreground'>
						{t('filters.categoryLabel')}
					</label>
					<Select
						value={selectedCategoryId}
						onValueChange={(value) => setSelectedCategoryId(value)}
					>
						<SelectTrigger className='mt-2'>
							<SelectValue placeholder={t('filters.allCategories')} />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value='all'>{t('filters.allCategories')}</SelectItem>
							{categories.map((category) => (
								<SelectItem key={category._id} value={category._id}>
									{category?.title?.[locale] ?? category._id}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div className='text-sm font-medium text-muted-foreground md:text-right'>
					{t('filters.results', { count: filteredPosts.length })}
				</div>
			</div>
			<div className='mx-auto mt-12 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
				{paginatedPosts.length > 0 ? (
					paginatedPosts.map((post) => (
						<BlogCard key={post._id} post={post} locale={locale} />
					))
				) : (
					<div className='col-span-full rounded-2xl border border-dashed border-border/70 bg-white/70 py-12 text-center text-sm font-medium text-muted-foreground'>
						{t('filters.empty')}
					</div>
				)}
			</div>
			{totalPages > 1 && (
				<Pagination className='mt-12'>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious
								href='#blog-list'
								className={cn(
									currentPage === 1 && 'pointer-events-none opacity-50'
								)}
								onClick={(event) => {
									if (currentPage === 1) {
										event.preventDefault();
										return;
									}
									event.preventDefault();
									setCurrentPage((page) => Math.max(1, page - 1));
								}}
							/>
						</PaginationItem>
						{pageItems.map((page, index) => (
							<PaginationItem key={`${page}-${index}`}>
								{page === 'ellipsis' ? (
									<PaginationEllipsis />
								) : (
									<PaginationLink
										href='#blog-list'
										isActive={currentPage === page}
										onClick={(event) => {
											event.preventDefault();
											setCurrentPage(page);
										}}
									>
										{page}
									</PaginationLink>
								)}
							</PaginationItem>
						))}
						<PaginationItem>
							<PaginationNext
								href='#blog-list'
								className={cn(
									currentPage === totalPages &&
										'pointer-events-none opacity-50'
								)}
								onClick={(event) => {
									if (currentPage === totalPages) {
										event.preventDefault();
										return;
									}
									event.preventDefault();
									setCurrentPage((page) => Math.min(totalPages, page + 1));
								}}
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			)}
		</section>
	);
};

export default AllBlogs;
